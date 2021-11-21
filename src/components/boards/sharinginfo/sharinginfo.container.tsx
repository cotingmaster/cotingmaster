import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import SharinginfoUI from './sharinginfo.presenter';
import { FETCH_USEDITEMS } from '../board.query';
import { useNavigation } from '@react-navigation/native';

export default function SharinginfoContainer() {
  const { data, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: {
      page: 1,
    },
  });
  const [sharingData, setSharingData] = useState([]);

  useEffect(() => {
    refetch({ page: 1 });
    const sharingBoardData = data?.fetchUseditems.filter(
      (e: any) => e.remarks === 'SharingInfo',
    );
    setSharingData(sharingBoardData);
  }, [data]);

  const navigation = useNavigation();

  const onPressMoveToDetail = (el: any) => {
    navigation.push('정보공유게시판디테일', {
      id: el._id,
    });
  };

  const onPressWrite = () => {
    navigation.navigate('정보공유게시판등록');
  };

  return (
    <SharinginfoUI
      sharingData={sharingData}
      onPressMoveToDetail={onPressMoveToDetail}
      onPressWrite={onPressWrite}
    />
  );
}

// const SharinginfoContainer = () => {
//   const [refreshing, setRefreshing] = useState(false);
//   const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
//     variables: { page: 1, isSoldout: false, search: '' },
//   });
//   const [sharingData, setSharingData] = useState({});

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
//     const sharingBoardData = data?.fetchUseditems.filter(
//       e => e.remarks === 'SharingInfo',
//     );
//     setSharingData(sharingBoardData);
//   }, [data]);

//   return (
//     <SharinginfoUI
//       sharingData={sharingData}
//       onLoadMore={onLoadMore}
//       setRefreshing={setRefreshing}
//       refreshing={refreshing}
//     />
//   );
// };

// export default SharinginfoContainer;
