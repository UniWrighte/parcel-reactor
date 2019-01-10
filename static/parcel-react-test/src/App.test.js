/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", ()=>{
	const app = shallow(<App />);

	it("Has a container", ()=>{
		expect(app.find("div").exists()).toBe(true);
	});
});
