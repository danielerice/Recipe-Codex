import React, { useEffect, useState } from "react";


function Home ({ user }) {

    return (
        <div>{user.name}</div>

    )
}

export default Home;