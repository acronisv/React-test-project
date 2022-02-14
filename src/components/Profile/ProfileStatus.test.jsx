import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props must be in state", () => {
        const component = create(<ProfileStatus status="Test status"/>);
        const instance = component.getInstance()
        expect(instance.state.status).toBe("Test status");
    });

    test("The span must be displayed", () => {
        const component = create(<ProfileStatus status="Test status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("The span must not be displayed after input", () => {
        const component = create(<ProfileStatus status="Test status"/>);
        const root = component.root;
        expect(()=>{
            let input = root.findByType("input")
        }).toThrow()
    });

    test("The span must have correct status", () => {
        const component = create(<ProfileStatus status="Test status"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.props.children).toBe("Test status");
    });

    test("Input must be displayed instead of span in editMode", () => {
        const component = create(<ProfileStatus status="Test status"/>);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Test status");
    });

    test("Callback must be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Test status" updateStatus={mockCallback}/>);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
  });