const { When } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from "../PageObject/BaseClass.spec";
const bs = new BaseClass();

describe('',()=>{
    When('User logins Savvas as a Teacher with valid username and password11',()=>{
        bs.savvasLogin('teacher_noclasslist01', 'testing123$')
    })

    
})