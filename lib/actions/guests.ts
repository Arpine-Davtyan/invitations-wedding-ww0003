"use server";

import { supabase } from "@/lib/supabase";

export interface CreateGuestParams {
  full_name: string;
  accepted: boolean;
  number: number;
}

export async function createGuest({
  full_name,
  accepted,
  number,
}: CreateGuestParams) {
  const { data, error } = await supabase
    .from("guests")
    .insert({
      full_name,
      accepted,
      number,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}