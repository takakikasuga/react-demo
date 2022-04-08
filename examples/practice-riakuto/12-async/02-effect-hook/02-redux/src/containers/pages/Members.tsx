import { VFC } from 'react';
import { useParams } from 'react-router';

import usemembersGotten from 'hooks/use-get-members';
import Members from 'components/pages/Members';

const EnhancedMembers: VFC = () => {
  const { orgCode = '' } = useParams();
  const { users, isLoading } = usemembersGotten(orgCode);

  return <Members {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
