import { sql } from "@vercel/postgres";

export default async function Cart({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> {
  console.log(searchParams);

  const { rows } = await sql`SELECT * from todos where user_id=${
    searchParams.user as string
  }`;

  return (
    <div>
      <h1 className="mb-4">Welcome to Next.js</h1>

      <h2 className="mb-4">Todos</h2>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.content}
        </div>
      ))}
    </div>
  );
}
