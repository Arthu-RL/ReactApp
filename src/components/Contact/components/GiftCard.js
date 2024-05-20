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
            (prevState) => ({...prevState, valid: false})
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
            {!giftCard.valid && (<h3>Gift Card was Spent!</h3>)}
        </>
    );
}

export default GiftCard;