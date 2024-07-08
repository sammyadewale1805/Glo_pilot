import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BarData from "../../widget/BarData";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BarChartItem from "../../widget/BarChart";

interface ProfilePreviewProps {
  preview: Boolean;
}

const ProfilePreviewItem: React.FC<ProfilePreviewProps> = ({ preview }) => {
  return (
    <View>
      {preview && (
        <View>
          <Text style={{ marginTop: wp(4) }}>
            Your current rating reflects an average of the last 300 ratings from
            customers, showing a consistently high level of satisfaction and
            indicating excellent service quality.
          </Text>
          <View style={{ alignItems: "center" }}>
            <BarChartItem BarData={BarData} />
            <TouchableOpacity
              style={{
                backgroundColor: "#EEEEEE",
                height: hp(4),
                width: wp(27),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: wp(2),
                marginTop: wp(5),
              }}
            >
              <Text>View Deatails</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProfilePreviewItem;
