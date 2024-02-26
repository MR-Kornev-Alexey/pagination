"use client"
import React, {useState, useEffect} from 'react';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Box, Button} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import md5 from 'md5';
import AlertModal from "./components/modal"

export default function PaginatedTable() {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [btn, setBtn] = useState(false);
    const productsPerPage = 50;
    const [totalPages, setTotalPages] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorGetOfData, setErrorGetOfData] =useState(false);
    const [style, setStyle] = useState({
        display: 'inline-block',
        width: '2em',
        height: '2em',
        '--svg': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Crect width=\'2.8\' height=\'12\' x=\'1\' y=\'6\' fill=\'%23000\'%3E%3Canimate id=\'svgSpinnersBarsScale0\' attributeName=\'y\' begin=\'0;svgSpinnersBarsScale1.end-0.1s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'6;1;6\'/%3E%3Canimate attributeName=\'height\' begin=\'0;svgSpinnersBarsScale1.end-0.1s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'12;22;12\'/%3E%3C/rect%3E%3Crect width=\'2.8\' height=\'12\' x=\'5.8\' y=\'6\' fill=\'%23000\'%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBarsScale0.begin+0.1s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'6;1;6\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBarsScale0.begin+0.1s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'12;22;12\'/%3E%3C/rect%3E%3Crect width=\'2.8\' height=\'12\' x=\'10.6\' y=\'6\' fill=\'%23000\'%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBarsScale0.begin+0.2s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'6;1;6\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBarsScale0.begin+0.2s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'12;22;12\'/%3E%3C/rect%3E%3Crect width=\'2.8\' height=\'12\' x=\'15.4\' y=\'6\' fill=\'%23000\'%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBarsScale0.begin+0.3s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'6;1;6\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBarsScale0.begin+0.3s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'12;22;12\'/%3E%3C/rect%3E%3Crect width=\'2.8\' height=\'12\' x=\'20.2\' y=\'6\' fill=\'%23000\'%3E%3Canimate id=\'svgSpinnersBarsScale1\' attributeName=\'y\' begin=\'svgSpinnersBarsScale0.begin+0.4s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'6;1;6\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBarsScale0.begin+0.4s\' calcMode=\'spline\' dur=\'0.6s\' keySplines=\'.36,.61,.3,.98;.36,.61,.3,.98\' values=\'12;22;12\'/%3E%3C/rect%3E%3C/svg%3E")',
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'var(--svg)',
        maskImage: 'var(--svg)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%'
    });

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const generateHeaders = () => {
        const password = "Valantis";
        const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const authString = md5(`${password}_${timestamp}`);
        return {'X-Auth': authString};
    };

    const customFetchData = async (action, params) => {
        try {
            const headers = generateHeaders();
            const response = await axios.post(`http://api.valantis.store:40000`, {
                action,
                params
            }, {headers});
            console.log(response.data.result);
            const productIds = Array.from(new Set(response.data.result.slice(0, 100)));
            const productDetails = await fetchProductDetails(productIds);
            // Вычисляем количество страниц
            console.log(productDetails);
            const totalPages = Math.ceil(productIds.length / productsPerPage);
            setTotalPages(totalPages);
            setProducts(productDetails);
            setBtn(true)
            setModalIsOpen(false);
        } catch (error) {
            setErrorGetOfData(true)
            console.error('Error fetching product details:', error);
        }
    };

    const handleRestart = async () => {
        setProducts([])
        await fetchData()
        setBtn(false)
    };

    const handleFindOfProduct = async (product) => {
        setModalIsOpen(true);
        await customFetchData("filter", {"product": product});
    };

    const handleFindOfPrice = async (price) => {
        setModalIsOpen(true);
        await customFetchData("filter", {"price": price});
    };

    const handleFindOfBrand = async (brand) => {
        setModalIsOpen(true);
        await customFetchData("filter", {"brand": brand});
    };

    const fetchProductDetails = async (productIds) => {
        try {
            const headers = generateHeaders();

            const response = await axios.post(`http://api.valantis.store:40000`, {
                "action": "get_items",
                "params": {"ids": productIds}
            }, {headers});
             return response.data.result;
        } catch (error) {
            console.error('Error fetching product details:', error);
            return [];
        }
    };

    const fetchData = async () => {
        try {
            const headers = generateHeaders();
            let productIds = [];
            let offset = 0;
            const limit = 100;
            while (productIds.length < 100) {
                const response = await axios.post(`http://api.valantis.store:40000`, {
                    "action": "get_ids",
                    "params": {"offset": offset, "limit": limit}
                }, {headers});

                productIds = productIds.concat(response.data.result);

                offset += limit;

                if (response.data.result.length < limit) {
                    break;
                }
            }

            productIds = Array.from(new Set(productIds.slice(0, 100)));
            const productDetails = await fetchProductDetails(productIds);

            const totalPages = Math.ceil(productIds.length / productsPerPage);
            setTotalPages(totalPages);
            setProducts(productDetails);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
          fetchData();
    }, [page]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = page * productsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);

    if(products.length === 0) {
        return <Box> Загрузка... <div style={style}></div></Box>

    } else {
        return <Box component={Paper}>
            <Stack spacing={2} className='flex items-center justify-center my-4'>
                <Pagination count={totalPages} page={page} onChange={handleChangePage}/>
                {btn && <Button onClick={() => handleRestart()} variant="outlined" sx={{borderRadius: '0.5rem', color: "#6b6b6b", borderColor: "#6b6b6b"}}>Очистить все</Button>
                }
            </Stack>
            <TableContainer sx={{marginTop: 2}}>
                <Table sx={{minWidth: {md: 1200, sm: 760, xs: 360}}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">№</TableCell>
                            <TableCell align="left">id</TableCell>
                            <TableCell align="left">Наименование товара</TableCell>
                            <TableCell align="left">Цена</TableCell>
                            <TableCell align="left">Бранд</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedProducts.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': {border: 0},
                                    bgcolor: index % 2 === 0 ? '' : '#d0d0d0'
                                }}
                            >
                                <TableCell component="th" scope="row"
                                           align="center">{startIndex + index + 1}</TableCell>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell onClick={() => handleFindOfProduct(row.product)} sx={{cursor: "pointer"}}
                                           align="left"> {row.product}</TableCell>
                                <TableCell onClick={() => handleFindOfPrice(row.price)} sx={{cursor: "pointer"}}
                                           align="left">{row.price}</TableCell>
                                <TableCell onClick={() => handleFindOfBrand(row.brand)}
                                           sx={{cursor: row.brand ? 'pointer' : ''}}
                                           align="left">{row.brand}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2} className='flex items-center justify-center my-4'>
                <Pagination count={totalPages} page={page} onChange={handleChangePage}/>
            </Stack>
            <AlertModal closeModal={closeModal} isOpen={modalIsOpen} errorGetOfData={errorGetOfData}/>
        </Box>
    }
}

