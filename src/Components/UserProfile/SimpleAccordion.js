import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmployeeBox2 from './EmployeeBox2';
import EmployeeBox1 from './EmployeeBox1';
import UserTitle from './UserTitle';

export default function SimpleAccordion() {
    return (
        <div>

            <UserTitle />

            <Accordion sx={{ bgcolor: 'secondary.main', }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}>
                        Employee Information
                    </Typography>

                </AccordionSummary>

                <AccordionDetails sx={{ bgcolor: 'pengu.main', }}>

                    <Typography>
                        <EmployeeBox1 />
                    </Typography>

                </AccordionDetails>

            </Accordion>

            <Accordion sx={{ bgcolor: 'secondary.main', }}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}>
                        Employee Details
                    </Typography>

                </AccordionSummary>

                <AccordionDetails sx={{ bgcolor: 'pengu.main', }}>

                    <Typography>
                        <EmployeeBox2 />
                    </Typography>

                </AccordionDetails>

            </Accordion>
        </div>
    );
}
