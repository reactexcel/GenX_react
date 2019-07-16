import React, { useEffect } from "react";
import * as action from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import map from "lodash/map";

export default function FamilyNFriends(props) {
  const friends = useSelector(state => state.friendAndFamily);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.friendsRequest());
  }, []);
  return (
    <div className="profile-content">
      <div className="list-content">
        <div className="inner-content">
          <section className="f-layout">
            <article className="f-layout-body">
              <div className="f-layout-header header-bottom">
                <div className="hide-for-mobile display-total-desktop">
                  <h5>
                    Showing <span>{friends.data && friends.data.length}</span>{" "}
                    of {friends.data && friends.data.length} Relatives
                  </h5>
                </div>
              </div>
              <div className="f-layout-inner-body">
                {friends.data && friends.data.length > 0
                  ? map(friends.data, (dat, i) => {
                      return (
                        <div
                          className="friend-row"
                          key={i}
                          onClick={() => {
                            props.history.push(`/app/friend/${dat.id}`);
                          }}
                        >
                          <div className="friend-detail">
                            <div className="d-flex align-center mr-2 star-containr">
                              <span className="">
                                {dat.messages.length > 0 ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill={"#ff0000"}
                                  >
                                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                                  </svg>
                                ) : null}
                              </span>
                            </div>
                            <div className="d-flex align-center">
                              <div className="avatar mr-2">
                                {dat.first_name.charAt(0) +
                                  dat.last_name.charAt(0)}
                              </div>
                              <span className="capitalize">
                                {dat.first_name + " " + dat.last_name}
                              </span>
                            </div>
                          </div>
                          <div className="friend-connection">
                            <div className="fc-label b2">
                              Third to Fifth Cousin
                            </div>
                            <div className="fc-label-detail-color small-detail b3">
                              0.45% DNA shared, 2 segments
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
