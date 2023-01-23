import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import MOCK_DATA from "../../mock-data";
import {useDispatch, useSelector} from 'react-redux'
import petOperations from './../../redux/thunk'
import PetListItem from '../../components/pet-list-item';
import {
    PersonOutline,
    PetsOutlined,
    LocationOn,
    PunchClockOutlined,
    TransgenderOutlined,
} from '@mui/icons-material';
import {useEffect} from "react";



export default function PetList () {
    const dispatch = useDispatch()
    const isLoadingPet = useSelector(state => state.petList.loading)
    const {getPetsList} = petOperations
    useEffect(() => {
        dispatch(getPetsList)
    }, [])
    if (isLoadingPet) {
        return <p>Loading...</p>
    }
    return (
        <Box sx={{pb: 7}}>
            <CssBaseline/>
            <List>
                {MOCK_DATA.map((item) => (
                    <PetListItem
                        id ={item.id}
                        key={item.id}
                        petType={item.attr.animal}
                        petFieldData={[
                            {icon: <PersonOutline/>, data: item.name},
                            {icon: <PetsOutlined/>, data: item.breed},
                            {icon: <LocationOn/>, data: item.location},
                            {icon: <PunchClockOutlined/>, data: item.age},
                            {icon: <TransgenderOutlined/>, data: item.sex}
                        ]}
                    />
                ))}
            </List>

        </Box>
    );
};