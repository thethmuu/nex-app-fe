import Layout from '@/components/layout'
import Sidenav from '@/components/layout/sidebar'
import ContentsLayout from '@/components/layout/contentsLayout'

function Payslip() {
  return (
    <Layout title="Payslip | NexStack" sidebar={<Sidenav />}>
      <ContentsLayout>
        <div className='contents'>
          <h1>Payslip</h1>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
        </div>
      </ContentsLayout>
    </Layout>
  )
}

export default Payslip
