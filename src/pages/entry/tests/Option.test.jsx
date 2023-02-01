import {screen, render} from '@testing-library/react'
import Options from "../Options";

test("dispays image for each scoop option from server", async() => {
render(<Options optionType="scoops" />);

// find images
const scoopImages = await screen.findAllByRole("img", {name: /scoop$/i})
expect(scoopImages).toHaveLength(2);

// confirm alt text of images
const altText = scoopImages.map(elements => elements.alt)
expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"])
});
