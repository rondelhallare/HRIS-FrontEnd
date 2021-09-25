import { Box } from '@mui/system';

const Header = () => {
    return (
        <Box sx={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            bgcolor: 'secondary.main',

        }}>
            <header className="leftHeader">

                <h1>HRIS</h1>
                <h2>“The only place where SUCCESS comes first
                    before WORK is in the dictionary.”</h2>
            </header>
        </Box>

    )
}

export default Header;