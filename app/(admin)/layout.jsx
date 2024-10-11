import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      {children}
      <footer>
        <div>
          <span>Copyright ahmet</span>
        </div>
      </footer>
    </div>
  );
}
