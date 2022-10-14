import { Component } from "react";
import { Text, TextProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'components/text',
    component: Text,
    args: {
        children: "Lorem ipsum",
        size: "md"
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio"
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: "sm"
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: "lg"
    }
}