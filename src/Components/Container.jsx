import React from "react";

const Container = ({ children }) => {
    return (
        <section className="h-[95%] w-[95%] m-auto">
            {children}
        </section>
    )
}

export default Container;