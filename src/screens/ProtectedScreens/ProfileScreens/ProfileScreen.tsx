import { View, Text, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StatisticCard from "../../../component/Profile/StatisticCard";
import HeaderContainer from "../../../component/Profile/HeaderContainer";
import HightlightsCard from "../../../component/Profile/HightlightsCard";
import { useUserContext } from "../../../hooks/Usercontext/UserContext";
import STATUSBAR from "../../../widget/STATUSBAR";

const ProfileScreen = () => {
  const [driverRatingPreview, setDriverRatingPreview] = useState(false);
  const [satisfactionRatingPreview, setSatfactionRatingPreview] =
    useState(false);
  const [acceptanceRatePreview, setAcceptanceRatePreview] = useState(false);
  const [cancellationRatingPreview, setCancellationRationPreview] =
    useState(false);
  // const User = useContext(useUserContext)
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      {/**Profile header container */}
      <STATUSBAR />
      <HeaderContainer />
      {/**Statistic card */}
      <View style={{ marginTop: hp(1.2), backgroundColor: "white" }}>
        <Text style={{ fontSize: wp(4), fontWeight: "500", margin: wp(2) }}>
          Insights
        </Text>
        <StatisticCard
          label={"Driver rating"}
          preview={driverRatingPreview}
          setPreview={setDriverRatingPreview}
          percentageScore={"89"}
        />
        <StatisticCard
          label={"satisfaction ration"}
          preview={satisfactionRatingPreview}
          setPreview={setSatfactionRatingPreview}
          percentageScore={"89"}
        />
        <StatisticCard
          label={"Acceptance rate"}
          preview={acceptanceRatePreview}
          setPreview={setAcceptanceRatePreview}
          percentageScore={"89"}
        />
        <StatisticCard
          label={"Cancellation rate"}
          preview={cancellationRatingPreview}
          setPreview={setCancellationRationPreview}
          percentageScore={"89"}
        />
      </View>
      {/**Performavne Hightlight card */}
      <HightlightsCard />
    </ScrollView>
  );
};

export default ProfileScreen;
