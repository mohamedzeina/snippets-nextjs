'use server'

import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  })


  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  });

  revalidatePath('/') //Dump the cached version of the home page and re-render
  redirect('/');

}

export async function createSnippet(formState: { message: string }, formData: FormData) {


  // Check the user's inputs and make sure they are valid
  const title = formData.get('title');
  const code = formData.get('code');

  try {
    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title Must Be Longer'
      }
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code Must Be Longer'
      }
    }

    // Create a new record in the database
    await db.snippet.create({
      data: {
        title,
        code
      }
    });


  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message
      }
    }
    else {
      return {
        message: 'Something went wrong...'
      }
    }
  }


  revalidatePath('/');
  // Redirect the user back to the root route
  redirect('/');
}

