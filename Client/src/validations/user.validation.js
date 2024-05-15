import * as yup from 'yup';

const UsersSchema = yup.object().shape({
  username: yup.string().min(3, 'istifadeci adı en az 3 xarakter olmalıdır').required('Istifadeci adı lazimdir'),
  password: yup.string().min(5, 'Şifre en az 5 xarakter olmalıdır').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Şifre en az 1 kicik herf, 1 boyuk herf ve 1 reqem olmalıdır').required('Şifre lazimdir'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Şifreler eyni olmalidir').required('Şifre dogrulamaq lazimdir'),
  email: yup.string().email('Duzgun bir email adresi giriniz').required('Email lazimdir'),
  profileImg: yup.string().url('Duzgun bir URL giriniz').required('Profil resmi lazimdir'),
  balance: yup.number().positive('balans pozitif olmalıdır').integer('balans tam reqem olmalıdır').required('balans lazimdir')
});
export default UsersSchema