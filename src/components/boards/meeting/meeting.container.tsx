import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import MeetingUI from './meeting.presenter';
import { FETCH_USEDITEMS } from '../board.query';

const MeetingContainer = () => {
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: false },
  });
  const [refreshing, setRefreshing] = useState(false);
  const [meetingData, setMeetingData] = useState({});

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(Number(data?.fetchUseditems.length / 10)),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  useEffect(() => {
    const meetingBoardData = data?.fetchUseditems.filter(
      e => e.remarks === 'Meeting',
    );
    setMeetingData(meetingBoardData);
  }, [data]);

  return (
    <MeetingUI
      meetingData={meetingData}
      onLoadMore={onLoadMore}
      setRefreshing={setRefreshing}
      refreshing={refreshing}
    />
  );
};

export default MeetingContainer;
