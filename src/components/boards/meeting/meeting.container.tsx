import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import MeetingUI from './meeting.presenter';
import { FETCH_USEDITEMS } from '../board.query';
import { useNavigation } from '@react-navigation/native';

export default function MeetingContainer() {
  const { data, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: {
      page: 1,
    },
  });
  const [meetingData, setMeetingData] = useState([]);

  useEffect(() => {
    refetch({ page: 1 });
    const meetingBoardData = data?.fetchUseditems.filter(
      (e: any) => e.remarks === 'Meeting',
    );
    setMeetingData(meetingBoardData);
  }, [data]);

  const navigation = useNavigation();

  const onPressMoveToDetail = (el: any) => {
    navigation.push('만남게시판디테일', {
      id: el._id,
    });
  };

  const onPressWrite = () => {
    navigation.navigate('만남게시판등록');
  };

  return (
    <MeetingUI
      meetingData={meetingData}
      onPressMoveToDetail={onPressMoveToDetail}
      onPressWrite={onPressWrite}
    />
  );
}

// const MeetingContainer = () => {
//   const [refreshing, setRefreshing] = useState(false);
//   const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
//     variables: { page: 1, isSoldout: false },
//   });
//   const [meetingData, setMeetingData] = useState({});

//   function onLoadMore() {
//     if (!data) return;
//     fetchMore({
//       variables: {
//         page: Math.ceil(Number(data?.fetchUseditems.length / 10)),
//       },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         return {
//           fetchUseditems: [
//             ...prev.fetchUseditems,
//             ...fetchMoreResult.fetchUseditems,
//           ],
//         };
//       },
//     });
//   }

//   useEffect(() => {
//     const meetingBoardData = data?.fetchUseditems.filter(
//       e => e.remarks === 'Meeting',
//     );
//     setMeetingData(meetingBoardData);
//   }, [data]);

//   return (
//     <MeetingUI
//       meetingData={meetingData}
//       onLoadMore={onLoadMore}
//       setRefreshing={setRefreshing}
//       refreshing={refreshing}
//     />
//   );
// };

// export default MeetingContainer;
