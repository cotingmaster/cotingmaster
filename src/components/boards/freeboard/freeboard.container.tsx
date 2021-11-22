import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import FreeBoardUI from './freeboard.presenter';
import { FETCH_USEDITEMS } from '../board.query';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const FreeBoardContainer = () => {
  const { data, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: {
      page: 1,
    },
  });
  const [freeData, setFreeData] = useState([]);

  useEffect(() => {
    refetch({ page: 1 });
    const freeboardData = data?.fetchUseditems.filter(
      (e: any) => e.remarks === 'Freeboard',
    );
    setFreeData(freeboardData);
  }, [data]);

  const navigation = useNavigation();

  const onPressMoveToDetail = (el: any) => {
    navigation.push('잡담게시판디테일', {
      id: el._id,
    });
  };

  const onPressWrite = () => {
    navigation.navigate('잡담게시판등록');
  };

  return (
    <FreeBoardUI
      freeData={freeData}
      onPressMoveToDetail={onPressMoveToDetail}
      onPressWrite={onPressWrite}
    />
  );
};

// export default FreeBoardContainer = () => {
//   const [refreshing, setRefreshing] = useState(false);
//   const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
//     variables: { page: 1, isSoldout: false },
//   });
//   const [freeData, setFreeData] = useState({});

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
//     const freeboardData = data?.fetchUseditems.filter(
//       (e: any) => e.remarks === 'Freeboard',
//     );
//     setFreeData(freeboardData);
//   }, [data]);

//   return (
//     <FreeBoardUI
//       freeData={freeData}
//       onLoadMore={onLoadMore}
//       setRefreshing={setRefreshing}
//       refreshing={refreshing}
//     />
//   );
// };
