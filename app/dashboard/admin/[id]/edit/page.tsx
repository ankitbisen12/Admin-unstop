import Form from "@/app/UI/admin/Form";
import { fetchUserId } from "@/app/lib/data";
import React from "react";
import { Users } from "@/app/lib/definitions";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // console.log("id",id);
  const user:Users[] = await fetchUserId(id);
  // console.log("Inside [id]/edit",user);
  const plainUser = JSON.parse(JSON.stringify(user));

  return (
    <main>
      <Form user={plainUser} />
    </main>
  );
}
