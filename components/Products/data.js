import Mortise from '../../public/img/mortise 2.jpeg';
import Deadbolt from '../../public/img/deadbolt 2s.png';
import Keybox from '../../public/img/keybox-3-hero-2.png';
// import Keybox from '/img/keybox-3-hero-2.png';
import E1 from '../../public/img/e1.png'
import E2 from '../../public/img/E2.png'

 const LockInfo = [
    {
        id:"DELAN001",
        name:"Smart Mortise 2+",
        price: "220,000",
        imageUrl: Mortise

    },
    {
        id:"DELAN002",
        name:"Smart Deadbolt 2s",
        price: "120,000",
        imageUrl: Deadbolt

    },
    {
        id:"DELAN003",
        name:"Smart Keybox 2s",
        price: "80,000",
        imageUrl: Keybox

    },
    {
        id:"DELAN004",
        name:"Smart Lock",
        price: "80,000",
        imageUrl: Mortise

    }
]

const IottyInfo = [
   
    {
        id:"DELAN006",
        name:"E2 Switch",
        price: "45,000",
        imageUrl: E2

    },
    {
        id:"DELAN005",
        name:"E1 Switch",
        price: "40,000",
        imageUrl: E1

    }
]

export {
    LockInfo,
    IottyInfo
}