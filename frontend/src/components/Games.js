import React from "react";
import '../style/style.css';
import horizon from  '../img/g1_horizon.jpg';
import alice from '../img/g2_Alice_Madness_Returns.jpg';
import godOfWar from '../img/g3_God_Of_War.jpg';
import lastOfUs from '../img/g4_The_Last_Of_Us_II.jpg';
import zelda from '../img/g5_Zelda.jpg';
import eldenRing from '../img/g6_elden_ring.jpg';
import demonsSouls from '../img/g7_demons_souls.jpg';
import reVillage from '../img/g8_resident_evil_village.jpg';
import re4 from '../img/g9_resident_evil_4.jpg';
import wukong from '../img/g10_wukong.jpg';





const Games = () => {
    return(
        <section class="games" id="games">
        <h2 class="heading">Our Games</h2>
    
        <div class="games-container">
           
            <div class="box">
                <div class="box-img">
                    <img src={horizon} alt="Horizon" />
                </div>
                <h3>Horizon Zero Dawn</h3>
                <span>Open World, RPG, Shooter</span>
            </div>
          
            
            
            <div class="box">
                <div class="box-img">
                    <img src={alice} alt="Alice: Madness Returns" />
                </div>
                <h3>Alice: Madness Returns</h3>
                <span>Action, Adventure, Horror</span>
            </div>
            
            
            
            <div class="box">
                <div class="box-img">
                    <img src={godOfWar} alt="God of War" />
                </div>
                <h3>God of War</h3>
            <span>Action, Adventure, RPG</span>
            </div>
            
            
          
            <div class="box">
                <div class="box-img">
                    <img src={lastOfUs} alt="The Last of Us Part II" />
                </div>
                <h3>The Last of Us Part II</h3>
                <span>Action, Adventure, Survival Horror</span>
            </div>
           
            
         
            <div class="box">
                <div class="box-img">
                    <img src={zelda} alt="The Legend of Zelda: Breath of the Wild" />
                </div>
                <h3>The Legend of Zelda: Twilight Princess</h3>
            <span>Action, Adventure, Open World</span>
            </div>
            
            
            
            <div class="box">
                <div class="box-img">
                    <img src={eldenRing} alt="Elden Ring" />
                </div>
                <h3>Elden Ring</h3>
            <span>Action, RPG, Open World</span>
            </div>
            
            
       
            <div class="box">
                <div class="box-img">
                    <img src={demonsSouls} alt="Demon's Souls" />
                </div>
                <h3>Demon's Souls</h3>
                <span>Action, RPG, Dark Fantasy</span>
            </div>
           
            
        
            <div class="box">
                <div class="box-img">
                    <img src={reVillage} alt="Resident Evil Village" />
                </div>
                <h3>Resident Evil Village</h3>
                <span>Survival Horror, Action, Adventure</span>
            </div>
           
            
         
            <div class="box">
                <div class="box-img">
                    <img src={re4} alt="Resident Evil 4" />
                </div>
                <h3>Resident Evil 4</h3>
                <span>Survival Horror, Action</span>
            </div>
           
            
          
            <div class="box">
                <div class="box-img">
                    <img src={wukong} alt="Black Myth: Wukong" />
                </div>
                <h3>Black Myth: Wukong</h3>
                <span>Action, Adventure, RPG</span>
            </div>  
        </div>
    </section>
    );
};

export default Games;