import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {Box} from '@mui/system';


Modal.setAppElement('#root');

export default function AlertModal({isOpen, closeModal, errorGetOfData}) {
    useEffect(() => {
        let timeoutId;
        if (errorGetOfData) {
            timeoutId = setTimeout(() => {
                closeModal();
            }, 3000);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [errorGetOfData, closeModal]);

    const modalStyles = {
        content: {
            display: 'flex',
            inset: 9,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: "white",
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
    };

    const [style, setStyle] = useState({
        display: 'inline-block',
        width: '2em',
        height: '2em',
        '--svg': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1em\' height=\'1em\' viewBox=\'0 0 24 24\'%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'1\' y=\'1\' fill=\'%23000\'%3E%3Canimate id=\'svgSpinnersBlocksWave0\' attributeName=\'x\' begin=\'0;svgSpinnersBlocksWave1.end+0.2s\' dur=\'0.6s\' values=\'1;4;1\'/%3E%3Canimate attributeName=\'y\' begin=\'0;svgSpinnersBlocksWave1.end+0.2s\' dur=\'0.6s\' values=\'1;4;1\'/%3E%3Canimate attributeName=\'width\' begin=\'0;svgSpinnersBlocksWave1.end+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'0;svgSpinnersBlocksWave1.end+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'8.33\' y=\'1\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'8.33;11.33;8.33\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'1;4;1\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'1\' y=\'8.33\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'1;4;1\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'8.33;11.33;8.33\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.1s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'15.66\' y=\'1\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'15.66;18.66;15.66\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'1;4;1\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'8.33\' y=\'8.33\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'8.33;11.33;8.33\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'8.33;11.33;8.33\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'1\' y=\'15.66\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'1;4;1\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'15.66;18.66;15.66\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.2s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'15.66\' y=\'8.33\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'15.66;18.66;15.66\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'8.33;11.33;8.33\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'8.33\' y=\'15.66\' fill=\'%23000\'%3E%3Canimate attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'8.33;11.33;8.33\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'15.66;18.66;15.66\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.3s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3Crect width=\'7.33\' height=\'7.33\' x=\'15.66\' y=\'15.66\' fill=\'%23000\'%3E%3Canimate id=\'svgSpinnersBlocksWave1\' attributeName=\'x\' begin=\'svgSpinnersBlocksWave0.begin+0.4s\' dur=\'0.6s\' values=\'15.66;18.66;15.66\'/%3E%3Canimate attributeName=\'y\' begin=\'svgSpinnersBlocksWave0.begin+0.4s\' dur=\'0.6s\' values=\'15.66;18.66;15.66\'/%3E%3Canimate attributeName=\'width\' begin=\'svgSpinnersBlocksWave0.begin+0.4s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3Canimate attributeName=\'height\' begin=\'svgSpinnersBlocksWave0.begin+0.4s\' dur=\'0.6s\' values=\'7.33;1.33;7.33\'/%3E%3C/rect%3E%3C/svg%3E")',
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'var(--svg)',
        maskImage: 'var(--svg)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%'
    });
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            {errorGetOfData ? <Box>Ошибка получения данных</Box>
                : <Box> Получение данных ... <div style={style}></div></Box>
            }
        </Modal>
    );
}

