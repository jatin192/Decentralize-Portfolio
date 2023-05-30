// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Portfolio_contract
{
    address private Manager ;

    constructor ()
    {
        Manager =msg.sender;
    }

    modifier My_manager()
    {
        require(msg.sender == Manager,"you not Manager");
        _; // This indicates that the function's logic should be executed after the modifier code.
    }
    
    //don't use full pinata gateway (less gas fee charge)
    string private  Pinata_Image;  
    string private  Description;
    string private  Pinata_Resume; 

    function set_Description(string calldata Description_) external My_manager{Description=Description_;}
    function set_Pinata_Image(string calldata Pinata_Image_) external My_manager{Pinata_Image=Pinata_Image_;}
    function set_Pinata_Resume(string calldata Pinata_Resume_) external My_manager{Pinata_Resume=Pinata_Resume_;}

    function show_Description() external view returns (string memory){return Description;}
    function show_Pinata_Image() external view returns (string memory){return Pinata_Image;}
    function show_Pinata_Resume() external view returns (string memory){return Pinata_Resume;}

    //__________________________________________________________________________________________________________

    struct Education
    {
        uint8 id;
        string date;
        string degree;
        string Institute_name;
    }

    struct Project
    {
        uint8 id;
        string name;
        string description;
        string Github_link; 
        string image;
    }

    struct Experience
    {
        uint8 id;
        string company_name;
        string post;
        string timeperiod;
        string knowledgeAcquired;
    }
    
    struct Achievements
    {
        uint8 id;
        string award_rank;
        string description;  
    }
    Education [] private array_1;
    Project [] private array_2;
    Experience[] private array_3;
    Achievements [] private array_4;

    uint8 Education_id;
    uint8 Project_id;
    uint8 Experience_id;
    uint8 Achievements_id;

       
//______________________________________________________________________________________________________________________________

    function Add_eduction(string calldata date,string calldata degree,string calldata Institute_name) external  My_manager  //
    {
        array_1.push(Education(Education_id,date,degree,Institute_name));
        Education_id++;
    }

    function Add_project(string calldata name,string calldata description,string calldata Github_link ,string calldata image) external My_manager
    {
        array_2.push(Project(Project_id,name,description,Github_link,image));
        Project_id++;
    }

    function Add_experience(string calldata company_name,string calldata post,string calldata timeperiod,string calldata knowledgeAcquired) external My_manager
    {
        array_3.push(Experience(Experience_id,company_name,post,timeperiod,knowledgeAcquired));
        Experience_id++;
    }

    function Add_Achievements(string calldata award_rank,string calldata description) external My_manager
    {
        array_4.push(Achievements(Achievements_id,award_rank,description));
        Achievements_id++;
    }
//_________________________________________________________________________________________________________________________


    function Change_experience(uint8 Experience_id_,string calldata company_name,string calldata post,string calldata timeperiod,string calldata knowledgeAcquired) external My_manager
    {
        array_3[Experience_id_] =Experience(Experience_id,company_name,post,timeperiod,knowledgeAcquired);
    }
    function Change_eduction(uint8 Education_id_ ,string calldata date,string calldata degree,string calldata Institute_name) external My_manager
    {
        array_1[Education_id_] = Education(Education_id_,date,degree,Institute_name);
    }
    function Change_project(uint8 Project_id_,string calldata name,string calldata description,string calldata Github_link,string calldata image) external My_manager
    {
        array_2[Project_id_] =Project(Project_id_,name,description,Github_link,image);
    }

    function Change_achievements(uint8 Achievements_id_,string calldata award_rank,string calldata description) external My_manager
    {
        array_4[Achievements_id_] =Achievements(Achievements_id_,award_rank,description);
    }

//________________________________________________________________________________________________________________________________

    function remove_element_from_Education(uint8 index) external My_manager
    {
        array_1[index] =array_1[array_1.length - 1];
        array_1.pop();
    }

    function remove_element_from_Project(uint8 index) external My_manager
    {
        array_2[index] =array_2[array_2.length - 1];
        array_2.pop();
    }

    function remove_element_from_Experience(uint8 index) external My_manager
    {
        array_3[index] =array_3[array_3.length - 1];
        array_3.pop();
    }   

    function remove_element_from_Achievements(uint8 index) external My_manager
    {
        array_4[index] =array_4[array_4.length - 1];
        array_4.pop();
    }

//______________________________________________________________________________________________________________________________
    function show_Education_array() external view returns(Education[] memory){return array_1;}
    function show_Project_array() external view returns(Project[] memory){return array_2;}
    function show_Experience_array() external view returns(Experience[] memory){return array_3;}
    function show_Achievements_array() external view returns(Achievements[] memory){return array_4;}

//__________________________________________________________________________________________________________________
    function donate() external payable
    {
        address payable adr = payable(Manager);
        adr.transfer(msg.value);
    }


}
