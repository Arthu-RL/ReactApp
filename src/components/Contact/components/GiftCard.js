import { useState } from "react";

function GiftCard() {
    const [giftCard, setGiftCard] = useState(
    {
        firstName: "Arthur",
        lastName: "Lima",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
    );

    function spendGiftCard() {
        setGiftCard(
            (prevState) => (
                {
                    ...prevState, 
                    text: "Your coupon has been used.",
                    valid: false,
                    instructions: "Please visit our restaurant to renew your gift card.",
                })
        );
    }

    return ( 
        <>
            {
                giftCard.valid && (
                    <div style={{padding: '40px'}}>
                        <h1>
                        Gift Card Page
                        </h1>
                        <h2>
                            Customer: {giftCard.firstName} {giftCard.lastName}
                        </h2>
                        <h3>
                            {giftCard.text}
                        </h3>
                        <p>
                            {giftCard.instructions}
                        </p>
                        <button onClick={spendGiftCard}>
                        Spend Gift Card
                        </button>
                    </div>
                )
            }
            {
                !giftCard.valid && (
                    <div style={{padding: '30px'}}>
                        <h2>{giftCard.text}</h2>
                        <h3>{giftCard.instructions}</h3>
                    </div>
                )
            }
        </>
    );
}

export default GiftCard;