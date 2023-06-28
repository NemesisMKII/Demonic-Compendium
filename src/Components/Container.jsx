import React from "react";

const Container = ({ children }) => {
    return (
        <section className="h-full w-full flex">
            {children}
        </section>
    )
}

export default Container;