import AdminLayout from '@/components/layout'
import ContentsLayout from '@/components/layout/contentsLayout'
import ContentsContainer from '@/components/layout/contentsLayout'
import SidebarNav from '@/components/layout/sidebar'

function AdminProfile() {
  return (
    <AdminLayout title="Admin Profile | NexStack" sidebar={<SidebarNav />}>
      <ContentsLayout>
        <div className="contents">
          <h1>Admin Profile</h1>
        </div>
      </ContentsLayout>
    </AdminLayout>
  )
}

export default AdminProfile
