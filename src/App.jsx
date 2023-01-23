import './App.css';
import React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {AddCircleOutline, PetsOutlined} from "@mui/icons-material";
import {Switch, Route} from 'react-router-dom'
import PetListPage from "./pets/ListPage";
import AddPetPage from "./pets/AddPetPage";
import PetList from "./container/pet-list";
import EditPetPage from "./pets/EditPetPage";
import Footer from "./components/footer";
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={PetListPage}/>
                <Route exact path='add-new-pet' component={AddPetPage}/>
                <Route exact path='/edit-pet/:id' component={EditPetPage}/>
            </Switch>
            <PetList/>
            <Footer/>
            {/*<CreatePetEntry/>*/}
            {/*<EditPetEntry/>*/}
            {/*<PetList/>*/}
            {/*<BottomNavigationAction*/}
            {/*    label="Pets"*/}
            {/*    value="PetList"*/}
            {/*    icon={<PetsOutlined />}*/}
            {/*/>*/}
            {/*<BottomNavigationAction*/}
            {/*    label="Add Pet"*/}
            {/*    value="AddPet"*/}
            {/*    icon={<AddCircleOutline />}*/}
            {/*/>*/}
        </div>
    );
}
export default App;