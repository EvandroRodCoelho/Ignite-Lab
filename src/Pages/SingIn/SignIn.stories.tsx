import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { SignIn } from "./";
import { rest } from "msw"
export default {
    title: "Pages/SingIn",
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post("./sessions", (req, res, ctx) => {
                    return res(ctx.json({
                        message: "Login Realizado"
                    }))
                })
            ]
        },
    },
} as Meta;

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText("Digite seu email"),
            "Test22@gmail.com")
        userEvent.type(canvas.getByPlaceholderText("******"),
            "12345678")

        userEvent.click(canvas.getByRole("button"))
        await waitFor(() => {
            return expect(canvas.getByText("Login realizado com sucesso"))
                .toBeInTheDocument()
        })
    }
};