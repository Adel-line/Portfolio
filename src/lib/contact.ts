/**
 * Single integration point for the contact form.
 *
 * Currently a stub: it validates shape, simulates latency, and resolves.
 * When wiring up Supabase, replace the body of submitContactForm with an
 * insert into a `contact_messages` table (or an edge-function call) —
 * nothing else in the UI needs to change.
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SubmitResult {
  ok: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    return { ok: false, error: 'All fields are required.' };
  }

  // TODO(supabase): replace with real submission, e.g.
  //   const { error } = await supabase.from('contact_messages').insert(data);
  //   return error ? { ok: false, error: error.message } : { ok: true };
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
