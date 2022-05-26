import { useFormik } from 'formik';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import api from '../../services/api';

import { Container, Form, FormGroup, Select } from './styles';


interface StockFormData {
    stock: string;
    type: string;
    average_price: string;
    sales_price?: string;
    quantity: string;
}

const validationSchema = Yup.object().shape({
    stock: Yup.string().required('* Campo obrigatório').trim(),
    average_price: Yup.number().required('* Campo obrigatório'),
    quantity: Yup.number().required('* Campo obrigatório'),
  })

export function NewStock() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            stock: '',
            type: 'stock',
            average_price: '',
            sales_price: '',
            quantity: ''
        },
        validationSchema,
        onSubmit: useCallback(
          async (data: StockFormData) => {
            try {
                
                const { average_price, sales_price, quantity, stock, type } = data;
                
                const NewAverage_price = average_price !== '' ? Number(average_price) * 100 : null;
                const NewSales_price = sales_price !== '' ? Number(sales_price) * 100 : null;


                console.log(NewAverage_price, NewSales_price)
                
                await api.post('stocks', {
                    name: stock,
                    type,
                    average_price: NewAverage_price,
                    sales_price: NewSales_price,
                    quantity,
                    
                       
                })

                toast.success('Cadastro realizado com sucesso')

                navigate('/dashboard/stock')

            } catch (err) {
                toast.error('Ocorreu um erro, tente novamente!')
            }
        }, [navigate])
      })


    return (
        <Container>
            <Form onSubmit={formik.handleSubmit}>
                <h2>Criar novo ativo</h2>

                <Input
                    label='Ativo:'
                    type='text'
                    name='stock'
                    id='stock'
                    placeholder='Digite o ativo'
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    isError={formik.touched.stock && Boolean(formik.errors.stock)}
                    errorMessage={formik.errors.stock}
                />

                <FormGroup>
                    <label htmlFor="typeStock">Tipo:</label>
                    <Select 
                        name="typeStock" 
                        id="typeStock" 
                        value={formik.values.type}
                        onChange={formik.handleChange}
                    >
                        <option value="stock">AÇÃO</option>
                        <option value="fii">FII</option>
                    </Select>
                </FormGroup>

                <Input
                    label='Preço médio:'
                    type='number'
                    name='average_price'
                    id='average_price'
                    placeholder='R$ 00,00'
                    value={formik.values.average_price}
                    onChange={formik.handleChange}
                    isError={formik.touched.average_price && Boolean(formik.errors.average_price)}
                    errorMessage={formik.errors.average_price}
                />

                <Input
                    label='Preço de venda:'
                    type='number'
                    name='sales_price'
                    id='sales_price'
                    placeholder='R$ 00,00'
                    value={formik.values.sales_price}
                    onChange={formik.handleChange}
                    isError={formik.touched.sales_price && Boolean(formik.errors.sales_price)}
                    errorMessage={formik.errors.sales_price}
                />


                <Input
                    label='Quantidade:'
                    type='number'
                    name='quantity'
                    id='quantity'
                    placeholder='Digite a quantidade'
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    isError={formik.touched.quantity && Boolean(formik.errors.quantity)}
                    errorMessage={formik.errors.quantity}
                />

                <Button
                    type='submit'
                    value='Cadastrar'
                />

            </Form>
        </Container>

    )
}