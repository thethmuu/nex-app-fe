import Layout from '@/components/layout'
import Sidenav from '@/components/layout/sidebar'
import ContentsLayout from '@/components/layout/contentsLayout'

function EmployeeSalary() {
  return (
    <Layout title="Employee Salary | NexStack" sidebar={<Sidenav />}>
      <ContentsLayout>
        <div className="contents">
          <h1>Employee Salary</h1>
          <p>
            Rank tall boy man them over post now. Off into she bed long fat
            room. Recommend existence curiosity perfectly favourite get eat she
            why daughters. Not may too nay busy last song must sell. An
            newspaper assurance discourse ye certainly. Soon gone game and why
            many calm have.
          </p>
        </div>
      </ContentsLayout>
    </Layout>
  )
}

export default EmployeeSalary
