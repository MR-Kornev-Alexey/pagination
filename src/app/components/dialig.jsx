import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Box} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide({isOpenDialog, closeDialog}) {
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
    return (
        <React.Fragment>
            <Dialog
                open={isOpenDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeDialog}
                aria-describedby="alert-dialog-slide-description"
                sx={{bgcolor: 'transparent'}}
            >
                <DialogContent >
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box>Получение данных... <div style={style}></div></Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
