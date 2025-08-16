import React, { useEffect, useState } from 'react';
import { Card, Col, Flex, Row, Spin } from 'antd';
import { getErrorMessage } from '../utils/get-error-message.util.ts';
import productService from '../service/product.service.ts';

interface IProduct {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = () => {
            setIsLoading(true);
            productService
                .findAll()
                .then((data) => {
                    if (data && data.products) {
                        setProducts(data.products);
                    } else {
                        console.warn('API response does not contain "products" array:', data);
                        setProducts([]);
                    }
                })
                .catch((error: unknown) => {
                    console.error('Error fetching products:', getErrorMessage(error));
                    setProducts([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {isLoading ? (
                <Flex
                    style={{
                        height: '50vh',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Spin size="large" />
                </Flex>
            ) : (
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="start">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={product.id} style={{ marginBottom: '16px' }}>
                                <Card
                                    hoverable
                                    cover={<img alt={product.title} src={product.thumbnail || 'https://placehold.co/300x200/cccccc/333333?text=No+Image'} />}
                                >
                                    <Card.Meta title={product.title} description={product.description} />
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>No products found or an error occurred during loading.</p>
                    )}
                </Row>
            )}
        </div>
    );
};

export default Home;
