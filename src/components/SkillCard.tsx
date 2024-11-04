import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  Icon: LucideIcon;
  color: string;
}

const SkillCard = ({ name, Icon, color }: SkillCardProps) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg text-center hover:bg-gray-700/50 transition-colors">
      <Icon className={`w-8 h-8 mb-3 mx-auto ${color}`} />
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
};

export default SkillCard;