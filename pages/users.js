import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { css } from '@emotion/react'
import { FaSortDown } from 'react-icons/fa'
import { BiFilter } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {
  Modal,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'

import MainLayout from '@/components/layout'
import SidebarNav from '@/components/layout/sidebar'

const columns = [
  {
    dataField: 'name',
    text: 'Name',
    sort: true,
    headerStyle: () => {
      return { width: '18%', textAlign: 'start' }
    },
  },
  {
    dataField: 'email',
    text: 'Email',
    sort: true,
    headerStyle: () => {
      return { width: '18%', textAlign: 'start' }
    },
  },
  {
    dataField: 'role',
    text: 'Role',
    sort: true,
    headerStyle: () => {
      return { width: '13%', textAlign: 'start' }
    },
  },
  {
    dataField: 'createdDate',
    text: 'Created Date',
    sort: true,
    headerStyle: () => {
      return { width: '13%', textAlign: 'start' }
    },
  },
  {
    dataField: 'status',
    text: 'Status',
    sort: true,
    headerStyle: () => {
      return { width: '13%', textAlign: 'start' }
    },
  },
  {
    dataField: 'action',
    text: 'Action',
    headerStyle: () => {
      return { width: '13%', textAlign: 'start' }
    },
  },
]
const data = [
  {
    name: 'ToeWai Phyo',
    email: 'toe@gmail.com',
    role: 'Admin',
    createdDate: '12/2/2022',
    status: 'Active',
    action: 'Delete',
  },
  {
    name: 'Apple',
    email: 'app@gmail.com',
    role: 'Staff',
    createdDate: '11/3/2022',
    status: 'Active',
    action: 'Delete',
  },
]

const User = () => {
  const [modalOpen, setmodalOpen] = useState(false)
  const [dropDownId, setdropDownId] = useState(null)
  // dropdowns
  const [designationDD, setDesignationDD] = useState(null)
  const [departmentDD, setDepartmentDD] = useState(null)
  const [roleDD, setRoleDD] = useState(null)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleDropdown = (id) => {
    if (id == dropDownId) {
      setdropDownId(null)
    } else {
      setdropDownId(id)
    }
  }
  return (
    <MainLayout sidebar={<SidebarNav />}>
      <Modal isOpen={modalOpen} size="lg" fullscreen="lg">
        <div css={styles.modalContainer}>
          <div css={styles.modalHeader}>
            <h3 css={styles.modalHeaderText}>Add User</h3>
            <AiOutlineCloseCircle
              size="24px"
              css={styles.modalHeaderIcon}
              onClick={() => setmodalOpen(false)}
            />
          </div>
          <hr />
          <form css={styles.modalBody} onSubmit={handleSubmit(onSubmit)}>
            <div css={styles.modalBodyLayout}>
              <Row>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      First Name <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Last Name <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      User Name <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Email <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="email" css={styles.modalInput} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Password <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="password" css={styles.modalInput} />
                  </div>
                </Col>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Confirm Password <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Employee ID <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Joining Date <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Phone <span css={styles.modalStar}>*</span>
                    </label>
                    <input type="text" css={styles.modalInput} />
                  </div>
                </Col>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Role <span css={styles.modalStar}>*</span>
                    </label>
                    <Dropdown
                      menuRole="listbox"
                      isOpen={dropDownId === 'role'}
                      toggle={() => handleDropdown('role')}
                    >
                      <DropdownToggle css={styles.modalSelect}>
                        <div css={styles.dropDownToggle}>
                          {roleDD === null ? (
                            <span css={styles.dropDownPlaceholder}>Role</span>
                          ) : (
                            <span css={styles.dropDownToggleText}>
                              {roleDD}
                            </span>
                          )}

                          <FaSortDown />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu end css={styles.dropDownMenu}>
                        <DropdownItem onClick={() => setRoleDD('Manager')}>
                          <span css={styles.dropDownItemText}>Manager</span>
                        </DropdownItem>
                        <DropdownItem divider css={styles.dropDownDivider} />
                        <DropdownItem onClick={() => setRoleDD('Staff')}>
                          <span css={styles.dropDownItemText}>Staff</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Department <span css={styles.modalStar}>*</span>
                    </label>
                    <Dropdown
                      menuRole="listbox"
                      isOpen={dropDownId === 'department'}
                      toggle={() => handleDropdown('department')}
                    >
                      <DropdownToggle css={styles.modalSelect}>
                        <div css={styles.dropDownToggle}>
                          {departmentDD === null ? (
                            <span css={styles.dropDownPlaceholder}>
                              Department
                            </span>
                          ) : (
                            <span css={styles.dropDownToggleText}>
                              {departmentDD}
                            </span>
                          )}

                          <FaSortDown />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu end css={styles.dropDownMenu}>
                        <DropdownItem
                          onClick={() => setDepartmentDD('Mobile Development')}
                        >
                          <span css={styles.dropDownItemText}>
                            Mobile Development
                          </span>
                        </DropdownItem>
                        <DropdownItem divider css={styles.dropDownDivider} />
                        <DropdownItem
                          onClick={() => setDepartmentDD('Web Development')}
                        >
                          <span css={styles.dropDownItemText}>
                            Web Development
                          </span>
                        </DropdownItem>
                        <DropdownItem divider css={styles.dropDownDivider} />
                        <DropdownItem
                          onClick={() => setDepartmentDD('HR Department')}
                        >
                          <span css={styles.dropDownItemText}>
                            HR Department
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
                <Col>
                  <div css={styles.modalForm}>
                    <label css={styles.modalLabel}>
                      Designation <span css={styles.modalStar}>*</span>
                    </label>
                    <Dropdown
                      menuRole="listbox"
                      isOpen={dropDownId === 'designation'}
                      toggle={() => handleDropdown('designation')}
                    >
                      <DropdownToggle css={styles.modalSelect}>
                        <div css={styles.dropDownToggle}>
                          {designationDD === null ? (
                            <span css={styles.dropDownPlaceholder}>
                              Designation
                            </span>
                          ) : (
                            <span css={styles.dropDownToggleText}>
                              {designationDD}
                            </span>
                          )}

                          <FaSortDown />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu end css={styles.dropDownMenu}>
                        <DropdownItem
                          onClick={() => setDesignationDD('Web Developer')}
                        >
                          <span css={styles.dropDownItemText}>
                            Web Developer
                          </span>
                        </DropdownItem>
                        <DropdownItem divider css={styles.dropDownDivider} />
                        <DropdownItem
                          onClick={() => setDesignationDD('Web Designer')}
                        >
                          <span css={styles.dropDownItemText}>
                            Web Designer
                          </span>
                        </DropdownItem>
                        <DropdownItem divider css={styles.dropDownDivider} />
                        <DropdownItem
                          onClick={() => setDesignationDD('Business Analyst')}
                        >
                          <span css={styles.dropDownItemText}>
                            Business Analyst
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="my-5 text-center">
              <button className="button b-primary" onClick={() => setmodalOpen(false)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <header css={styles.headerContainer}>
        <div>
          <h3 css={styles.headerTitle}>Users</h3>
          <p css={styles.path} className="mb-0">
            Dashboard <span className="text-secondary">{router.pathname}</span>
          </p>
        </div>
        <div className="d-flex align-items-center">
          <button
            css={styles.addBtn}
            // className="button fw-normal fs-6 px-3 py-1"
            onClick={() => setmodalOpen(true)}
          >
            Add User
          </button>
        </div>
      </header>
      <section css={styles.bodyContainer}>
        <div css={styles.bodyFilter}>
          <BiFilter color="#2D6DB7" size="30px" />
          <span css={styles.bodyFilterText}>Filter</span>
        </div>
        <div css={styles.bodyTable}>
          <BootstrapTable
            keyField="name"
            columns={columns}
            data={data}
            bordered={false}
            defaultSorted={[{ dataField: 'dateOfBirth', order: 'desc' }]}
          />
        </div>
        <div css={styles.bodyPagination}>
          <span css={styles.paginationButton}>Prev</span>
          <div css={styles.pageNumber}>1</div>
          <span css={styles.paginationButton}>Next</span>
        </div>
      </section>
    </MainLayout>
  )
}
const styles = {
  headerContainer: css`
    display: flex;
    justify-content: space-between;
    padding: 28px;
  `,
  headerTitle: css`
    font-size: 1.75rem;
    font-weight: 500;
    color: var(--primary);
  `,
  path: css`
    font-size: 16px;
    font-weight: 600;
    color: var(--primary);
  `,
  addBtn: css`
    padding: 6px 24px;
    color: #ffffff;
    background: var(--buttons);
    border: none;
    border-radius: 10px;
    box-shadow: var(--shadow);
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: .1rem;
  `,
  headerButtons: css`
    width: 160px;
    height: 50px;
    border-radius: 10px;
    background: var(--buttons);
    border: 0;
    color: white;
  `,
  bodyContainer: css`
    height: 100vh;
    background: var(--background);
    display: flex;
    flex-direction: column;
  `,
  bodyFilter: css`
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 10px 30px;
  `,
  bodyFilterText: css`
    color: var(--blue);
    font-size: 18px;
  `,

  bodyTable: css`
    background: #ffffff;
    margin: 0 30px 0 30px;
  `,
  arrowKey: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  bodyPagination: css`
    display: flex;
    justify-content: center;
    margin-top: 50px;
  `,
  pageNumber: css`
    background: var(--buttons);
    width: 38px;
    height: 43px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  paginationButton: css`
    background-color: #ffffff;
    height: 43px;
    width: 72px;
    font-size: 14px;
    font-weight: 600;
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  modalContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 800px;
  `,
  modalHeader: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  `,
  modalHeaderText: css`
    color: #283238;
    font-size: 18px;
    font-weight: 600;
  `,
  modalHeaderIcon: css`
    position: absolute;
    right: 40px;
    cursor: pointer;
  `,
  modalBodyLayout: css`
    margin: 0 0 0 65px;
  `,
  modalForm: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
  `,
  modalLabel: css`
    color: var(--primary);
    font-size: 14px;
    font-weight: 400;
  `,
  modalStar: css`
    color: var(--red);
  `,
  modalInput: css`
    width: 300px;
    height: 58px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    padding: 12px 20px;
    border: 0;
  `,
  modalSelect: css`
    display: inline-block !important;
    width: 300px !important;
    height: 58px !important;
    border-radius: 8px !important;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2) !important;
    padding: 0 20px 0 12px !important;
    border: 0 !important;
    background-color: #ffffff;
    color: black;
    &:hover,
    &:focus {
      background-color: #ffffff !important;
      color: black;
    }
  `,
  dropDownToggle: css`
    display: flex;
    justify-content: space-between;
  `,
  dropDownMenu: css`
    width: 300px;
  `,
  dropDownPlaceholder: css`
    color: var(--medium-gray);
    font-size: 14px;
    font-weight: 400;
  `,
  dropDownToggleText: css`
    color: var(--primary);
    font-size: 14px;
    font-weight: 600;
  `,
  dropDownItemText: css`
    font-size: 14px;
    font-weight: 400;
    color: var(--primary);
  `,
  dropDownDivider: css`
    background-color: var(--blue);
  `,
  modalButton: css`
    width: 160px;
    height: 58px;
    background: var(--buttons);
    color: #ffffff;
    border: 0;
    box-shadow: var(--shadow);
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 60px;
  `,
}
export default User
