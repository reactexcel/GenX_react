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
                              <span className="star" />
                            </div>
                            <div className="d-flex align-center">
                              <div className="avatar mr-2">2S</div>
                              {dat.first_name + " " + dat.last_name}
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
