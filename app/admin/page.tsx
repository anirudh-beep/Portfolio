import { createClient } from "@supabase/supabase-js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export const revalidate = 0 // Disable caching for this page

export default async function AdminPage() {
  // Fetch contact form submissions
  const { data: contacts, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching contacts:", error)
    return <div>Error loading contacts. Please try again later.</div>
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>

      {contacts && contacts.length > 0 ? (
        <div className="grid gap-6">
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{contact.subject}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      From: {contact.name} ({contact.email})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={contact.read ? "outline" : "default"}>{contact.read ? "Read" : "Unread"}</Badge>
                    <p className="text-xs text-muted-foreground">{new Date(contact.created_at).toLocaleString()}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{contact.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No contact form submissions yet.</p>
      )}
    </div>
  )
}
