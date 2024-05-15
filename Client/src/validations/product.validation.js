import * as yup from 'yup';

const productSchema = yup.object().shape({
  name: yup.string().required(' ad lazimdir'),
  salePrice: yup.number().required('salePrice adı lazimdir').min(0),
  costPrice: yup.number().required('costPrice adı lazimdir').min(0),
  imgSrc: yup.string().url('Duzgun bir URL giriniz').required('ProductImg lazimdir'),
  discountPercentage: yup.number().min(0, 'Endirim en az 0 faiz olmalıdır').max(100, 'Endirim en cox 100 faiz ola biler'),
  description: yup.string().min(10).required('Is Required'),
  categoryId: yup.string().required('Is Required'),
  stock: yup.number().required('Is Required').min(1),
});

export default productSchema;


