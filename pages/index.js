import MainLayout from '@/components/layout'
import SidebarNav from '@/components/layout/sidebar'
import useStore from 'store/data'

function HomePage() {
  // for sample only
  const testData = useStore((state) => state.testData)
  console.log(testData)
  return (
    <MainLayout>
      <h3>Welcome Admin!</h3>
      <p>These are categories from admin dashboard.</p>
    </MainLayout>
  )
}

export default HomePage
