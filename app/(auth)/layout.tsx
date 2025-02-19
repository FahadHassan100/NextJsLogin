import { signOut } from "@/auth";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Dashboard</h2>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
      <hr />
      {children}
    </section>
  );
}
