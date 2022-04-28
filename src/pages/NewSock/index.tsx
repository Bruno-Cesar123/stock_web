import { useFormik } from 'formik';
import { useCallback } from 'react';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/AuthContext';
import { Container, Form, FormGroup, Select } from './styles';

interface StockFormData {
    stock: string;
    typeStock: string;
    average_price: string;
    sales_price: string;
    quantity: number;
}

const validationSchema = Yup.object().shape({
    stock: Yup.string().required('* Campo obrigatório').trim(),
    average_price: Yup.string().required('* Campo obrigatório').trim(),
    sales_price: Yup.string().required('* Campo obrigatório').trim(),
    quantity: Yup.number().required('* Campo obrigatório'),
  })

export function NewStock() {
    const { user } = useAuth()

    const formik = useFormik({
        initialValues: {
            stock: '',
            typeStock: 'stock',
            average_price: '',
            sales_price: '',
            quantity: 0
        },
        validationSchema,
        onSubmit: useCallback(
          async (data: StockFormData) => {
            try {
              console.log(data, user.id)
            } catch (err) {
                console.log(err)
            }
        }, [user.id])
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
                />

                <FormGroup>
                    <label htmlFor="typeStock">Tipo:</label>
                    <Select 
                        name="typeStock" 
                        id="typeStock" 
                        value={formik.values.typeStock}
                        onChange={formik.handleChange}  
                    >
                        <option value="stock">AÇÃO</option>
                        <option value="fii">FII</option>
                    </Select>
                </FormGroup>

                <Input
                    label='Preço médio:'
                    type='text'
                    name='average_price'
                    id='average_price'
                    placeholder='R$ 00,00'
                    value={formik.values.average_price}
                    onChange={formik.handleChange}
                />

                <Input
                    label='Preço de venda:'
                    type='text'
                    name='sales_price'
                    id='sales_price'
                    placeholder='R$ 00,00'
                    value={formik.values.sales_price}
                    onChange={formik.handleChange}
                />


                <Input
                    label='Quantidade:'
                    type='text'
                    name='quantity'
                    id='quantity'
                    placeholder='Digite a quantidade'
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                />

                <Button
                    type='submit'
                    value='Cadastrar'
                />

            </Form>
        </Container>

    )
}