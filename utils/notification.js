import { toast } from 'react-toastify'

export default function showDefaultNoti(message, type) {
  toast[type](message, {
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
  })
}