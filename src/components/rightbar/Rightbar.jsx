import React from 'react'
import Online from '../online/Online'
import "./Rightbar.css"
import { Users } from "../../dummyData"

export default function Rightbar({ user }) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return (
            <>
                <div className="eventContainer">
                    <img src="assets/star.png" alt="" className="starImg" />
                    <span className="eventText">
                        <b>最新の投稿</b>
                    </span>
                </div>
                <img className="eventImg" src="assets/ad.jpeg" alt="" />
                <h4 className="rightbarTitle">オンラインの友達</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <Online user={user} key={user.id} />
                    ))}
                </ul>

            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">user info</h4>
                <div className="rightbarInfo">

                    <h4 className="rightbarTitle"></h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">koro</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">moko</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">hiro</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (<>
        {/* {!user && (<div className="rightbar">
            <div className="rightbarWrapper"><HomeRightbar /></div>
        </div>)
        } */}

    </>)
}
