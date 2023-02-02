import {screen, render} from '@testing-library/react'
import Options from "../Options";

describe("Option", () => {
    test("dispays image for each scoop option from server", async() => {
    render(<Options optionType="scoops" />);

    // find images
    const scoopImages = await screen.findAllByRole("img", {name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map(elements => elements.alt)
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"])
    });

    test("dispays image for each topings option from server", async() => {
        render(<Options optionType="toppings" />);

        // find img
        const topImg = await screen.findAllByRole("img", {name: /toping$/i})
        expect(topImg).toHaveLength(3);

        // confirm alt text
        const altText = topImg.map(element => element.alt);
        expect(altText).toEqual(["Cherries toping", "M&Ms toping","Hot fudge toping"])
    })
})
