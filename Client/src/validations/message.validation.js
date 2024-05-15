import * as yup from 'yup';

const MessageSchema = yup.object().shape({
  fullName: yup.string().required('Tam ad lazimdir'),
  email: yup.string().email('Duzgun bir email adresi daxil edin').required('Email lazimdir'),
  title: yup.string().required('Başlık lazimdir'),
  message: yup.string().min(10, 'Mesaj en az 10 xarakter olmalıdır').required('Mesaj lazimdir')
});
export default MessageSchema